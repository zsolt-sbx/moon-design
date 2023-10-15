import React, { useRef, useState, useEffect } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import {
  useTable,
  useResizeColumns,
  useExpanded,
  useBlockLayout,
  useFlexLayout,
  useSortBy,
  TableInstance,
  PluginHook,
  Row,
  HeaderGroup,
  UseResizeColumnsColumnProps,
  UseSortByColumnProps,
  TableOptions,
  UseExpandedRowProps,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import HeaderTR from './HeaderTR';
import HiddenTR from './HiddenTR';
import Minimap from './Minimap';
import TableWrapper from './TableWrapper';
import TH from './TH';
import useRowSpan from '../private/hooks/useRowSpan';
import useScrollState from '../private/hooks/useScrollState';
import type RowSpanHeaderProps from '../private/types/RowSpanHeaderProps';
import type TableProps from '../private/types/TableProps';
import renderRows from '../private/utils/renderRows';
import renderSpanRows from '../private/utils/renderSpanRows';

const Table = ({
  columns,
  data,
  defaultColumn,
  width,
  height,
  maxWidth,
  maxHeight,
  variant,
  layout,
  withFooter,
  withMinimap,
  expandedByDefault,
  defaultRowBackgroundColor = 'goku',
  evenRowBackgroundColor = 'goku',
  headerBackgroundColor = 'gohan',
  rowGap = 'gap-1',
  rowSize = 'md',
  isCellBorder,
  isSticky = true,
  isSorting,
  selectable,
  useCheckbox,
  textClip,
  renderRowSubComponent,
  getOnRowClickHandler,
  getOnRowSelect,
  updateMyData,
}: TableProps) => {
  const plugins = [
    layout === 'block' ? useBlockLayout : useFlexLayout,
    variant === 'calendar' ? useRowSpan : undefined,
    useResizeColumns,
    isSticky ? useSticky : undefined,
    isSorting ? useSortBy : undefined,
    useExpanded,
  ].filter((plugin) => !!plugin) as PluginHook<{}>[];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    rowsById,
    prepareRow,
    visibleColumns,
    toggleAllRowsExpanded,
    rowSpanHeaders,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      updateMyData,
    } as TableOptions<object>,
    ...plugins
  ) as TableInstance<object> & {
    toggleAllRowsExpanded: (isExpanded?: boolean) => void;
    rowSpanHeaders: RowSpanHeaderProps[];
  };
  const lastHeaderGroup = headerGroups[headerGroups.length - 1];
  const tableRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const onRowSelectHandler = getOnRowSelect
    ? getOnRowSelect()
    : () => undefined;

  const { scrollState, handleScroll } = useScrollState(tableRef);
  const [selectedRows, setSelectedRows] = useState<Row<{}>[]>([]);

  useEffect(() => {
    if (expandedByDefault === undefined || !data || !data.length) return;
    toggleAllRowsExpanded(expandedByDefault);
  }, [expandedByDefault, data, toggleAllRowsExpanded]);
  useEffect(() => {
    if (onRowSelectHandler) onRowSelectHandler(selectedRows);
  }, [selectedRows]);
  useEffect(() => {
    setSelectedRows(
      rows?.length
        ? rows.filter((row: Row<{ isSelected?: boolean }>) => {
            return row.original?.isSelected;
          })
        : []
    );
  }, []);

  const getHeaderRow = (
    column: HeaderGroup<object>,
    isSorting?: boolean,
    isLastColumn?: boolean
  ) => {
    const sortingColumn = column as unknown as UseSortByColumnProps<object>;
    const resizingColumn =
      column as unknown as UseResizeColumnsColumnProps<object>;

    return (
      <TH
        key={column.id}
        reactTableProps={{
          ...column.getHeaderProps(
            isSorting ? sortingColumn.getSortByToggleProps : undefined
          ),
        }}
        headerBackgroundColor={headerBackgroundColor}
        stickySide={
          // @ts-ignore
          (column.sticky === 'left' || column.parent?.sticky === 'left') &&
          scrollState.scrolledToRight
            ? 'left'
            : // @ts-ignore
            column.sticky === 'right' || column.parent?.sticky === 'right'
            ? 'right'
            : ''
        }
        isLastColumn={isLastColumn}
        rowSize={rowSize}
        isCellBorder={isCellBorder}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('label') !== null) {
            const checkbox = (e.target as HTMLElement).closest('label')?.querySelector('input[type="checkbox"]') as HTMLInputElement;
            if (checkbox?.checked) {
              setSelectedRows([]);
            } else {
              setSelectedRows(Object.values(rowsById));
            }
          }
        }}
      >
        {column.render('Header')}
        <div
          {...resizingColumn.getResizerProps()}
          className={mergeClassnames(
            'inline-block w-px h-full absolute top-0 end-0 z-1 after:content-none after:absolute',
            'after:w-px after:h-[70%] after:bottom-[15%] after:end-0',
            resizingColumn.isResizing && 'after:bg-piccolo'
          )}
        />
      </TH>
    );
  };
  const getFooterRowWhenResizing = (column: HeaderGroup<object>) => {
    const resizingColumn =
      column as unknown as UseResizeColumnsColumnProps<object>;
    return (
      <TH
        key={column.id}
        reactTableProps={{ ...column.getHeaderProps() }}
        headerBackgroundColor={headerBackgroundColor}
        stickySide={
          // @ts-ignore
          column.sticky === 'left' && scrollState.scrolledToRight
            ? 'left'
            : // @ts-ignore
            column.sticky === 'right' && scrollState.scrolledToLeft
            ? 'right'
            : ''
        }
        rowSize={rowSize}
        isCellBorder={isCellBorder}
      >
        {column.render('Footer')}

        <div
          {...resizingColumn.getResizerProps()}
          className={mergeClassnames(
            'resizer inline-block cursor-ew-resize w-2 h-full absolute top-0 end-0 z-1 after:end-0',
            'after:content-none after:absolute after:w-px after:h-[70%] after:bottom-[15%]',
            resizingColumn.isResizing && 'isResizing after:bg-piccolo'
          )}
        />
      </TH>
    );
  };

  const selectCheckableRow = (selectedRow: any, callback?: () => React.Dispatch<React.SetStateAction<{[key: string]: boolean;}>>) => {
    const row = selectedRow as Row<{}>;
    const xRow = selectedRow as UseExpandedRowProps<{}>

    let alreadySelectedRows = [...selectedRows];
    const alreadySelectedRow = alreadySelectedRows.filter(
      (selectedRow) => row.id === selectedRow.id
    )[0];

    if (xRow.canExpand) {
      const selectedIndexes = alreadySelectedRows.map((item: Row<{}>) => item.id);
      const allSelected = Object.keys(rowsById)
        .filter((id) => id.indexOf(row.id) === 0)
        .every((id) => ~selectedIndexes.indexOf(id));

      if (alreadySelectedRow && allSelected) {
        alreadySelectedRows = alreadySelectedRows.filter(({ id }) => id.indexOf(row.id) !== 0);
      } else {
        alreadySelectedRows = Object.values(rowsById)
          .reduce((acc: Row<{}>[], item: Row<{}>) => {
            if (item.id.indexOf(row.id) === 0
              && selectedIndexes.indexOf(item.id) === -1
            )
              acc.push(item);
            return acc;
          }, alreadySelectedRows);
      }
    } else {
      if (alreadySelectedRow) {
        alreadySelectedRows = alreadySelectedRows.filter(
          (selectedRow) => row.id !== selectedRow.id
        );
      } else {
        alreadySelectedRows.push(row);
      }
    }

    if (alreadySelectedRows) {
      let depth = xRow.depth;
      while (depth >= 0) {
        const mask = row.id.split('.').slice(0, depth).join('.');
        if (!alreadySelectedRows.some(({ id }) => id.indexOf(mask) === 0 && id !== mask)) {
          alreadySelectedRows = alreadySelectedRows.filter(({ id }) => id !== mask);
        }
        depth--;
      }
    }

    const setRowsSelectState = callback && callback() as React.Dispatch<React.SetStateAction<{[key: string]: boolean;}>>;
    setRowsSelectState && setRowsSelectState(
      alreadySelectedRows.reduce((acc: { [key: string]: boolean }, item) => {
        acc[`${item.id}-`] = true
        return acc;
      }, {}) || {}
    );

    setSelectedRows(alreadySelectedRows);
  }

  const selectCommonRow = (selectedRow: any) => {
    const row = selectedRow as Row<{}>;
    let alreadySelectedRows = [...selectedRows];
    const alreadySelectedRow = alreadySelectedRows.filter(
      (selectedRow) => row.id === selectedRow.id
    )[0];

    if (alreadySelectedRow) {
      alreadySelectedRows = alreadySelectedRows.filter(
        (selectedRow) => row.id !== selectedRow.id
      );
    } else {
      alreadySelectedRows.push(row);
    }

    setSelectedRows(alreadySelectedRows);
  }

  const renderTableComponent = () => (
    <TableWrapper
      reactTableProps={{ ...getTableProps() }}
      tableRef={tableRef}
      onScroll={handleScroll}
      className={isSticky ? 'sticky' : ''}
      isScrolledToLeft={scrollState.scrolledToLeft}
      isScrolledToRight={scrollState.scrolledToRight}
      style={{
        width,
        height,
        maxWidth,
        maxHeight,
      }}
      variant={variant}
      defaultRowBackgroundColor={defaultRowBackgroundColor}
      evenRowBackgroundColor={evenRowBackgroundColor}
      headerBackgroundColor={headerBackgroundColor}
    >
      <Header
        selectable={useCheckbox}
        headerBackgroundColor={headerBackgroundColor}
      >
        {headerGroups.map((headerGroup: HeaderGroup<object>, index) => (
          <HeaderTR
            reactTableProps={{ ...headerGroup.getHeaderGroupProps() }}
            key={headerGroup.getHeaderGroupProps().key}
          >
            {headerGroup.headers.map((column: HeaderGroup<object>, index) =>
              getHeaderRow(
                column,
                isSorting,
                index === headerGroup.headers.length - 1
              )
            )}
          </HeaderTR>
        ))}
        <HiddenTR lastHeaderGroup={lastHeaderGroup} />
      </Header>

      <Body reactTableProps={{ ...getTableBodyProps() }} rowGap={rowGap}>
        {variant === 'calendar'
          ? renderSpanRows({
              rows,
              prepareRow,
              getOnRowClickHandler,
              evenRowBackgroundColor,
              defaultRowBackgroundColor,
              rowSpanHeaders,
              selectable,
              useCheckbox,
              rowSize,
              isCellBorder,
            })
          : renderRows({
              rows,
              prepareRow,
              getOnRowClickHandler,
              getOnRowSelectHandler: !selectable
                ? undefined
                : useCheckbox
                  ? (row) => selectCheckableRow
                  : (row) => selectCommonRow,

              evenRowBackgroundColor,
              defaultRowBackgroundColor,
              renderRowSubComponent,
              selectable,
              useCheckbox,
              rowSize,
              isCellBorder,
              textClip,
            })}
      </Body>

      {withFooter && (
        <Footer
          ref={footerRef}
          selectable={useCheckbox}
          headerBackgroundColor={headerBackgroundColor}
        >
          {footerGroups.map((footerGroup: HeaderGroup<object>) => (
            <HeaderTR
              key={footerGroup.getHeaderGroupProps().key}
              reactTableProps={{ ...footerGroup.getHeaderGroupProps() }}
            >
              {footerGroup.headers.map((column: HeaderGroup<object>) =>
                getFooterRowWhenResizing(column)
              )}
            </HeaderTR>
          ))}
        </Footer>
      )}
    </TableWrapper>
  );

  if (withMinimap) {
    return (
      <div className="relative h-full w-full overflow-auto">
        {renderTableComponent()}
        <Minimap
          numberOfColumns={visibleColumns.length}
          tableRef={tableRef}
          footerRef={footerRef}
        />
      </div>
    );
  }

  return renderTableComponent();
};

export default Table;
