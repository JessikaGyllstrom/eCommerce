import PropTypes from 'prop-types';

function SmartTable(props) {
  const {data} = props;


  return (
    <div className="col-12 p-4">
      <div className="smartTable-container row">
        <div className="col-12">
      
          <div className="row">
            <div className="col-6 h3">{props.title}</div>
            <div className="col-6 text-end">
            </div>
          </div>
            <div className="row mt-3">
              <div className="smartTable-tableContainer">
                <table
                  className={'smartTable-table table table-striped border'}
             
                >
                  <thead className="smartTable-thead">
                    <tr>
                      {props.headCells.map((headCell) => {
                        return (
                          <th
                            id={headCell.id}
                            key={headCell.id}
                            scope="col"
                            style={{ width: headCell.width ?? 'auto' }}
                            className={
                              headCell.sortable !== false
                                ? 'smartTable-pointer'
                                : ''
                            }
                            onClick={() =>
                              headCell.sortable !== false
                                ? sortData(headCell.id)
                                : {}
                            }
                          >
                            {headCell.label}
                        
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, idx) => {
                      return (
                        <tr key={'tr_' + idx}>
                          {props.headCells.map((headCell, idxx) => {
                            return (
                              <td key={'td_' + idx + '_' + idxx}>
                                {headCell.render
                                  ? headCell.render(row)
                                  : row[headCell.id]}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
       
          {props.noPagination || data.length === 0 || !props.url ? (
            <div className="row">
              <div className="col-12 text-end p-3">
                {data.length > 0 ? data.length : 0} Rows
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12 text-end p-3">
                <span>
                  Rows per page:{' '}
                  <select
                    name="rowsPerPage"
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(e.target.value);
                      fetchData(buildQueryString(search, page, e.target.value));
                    }}
                  >
                    {rowsPerPageOptions.map((nbr, idx) => {
                      return (
                        <option key={'rowsPerPageOptions_' + idx} value={nbr}>
                          {nbr}
                        </option>
                      );
                    })}
                  </select>
                </span>
                <span className="ms-4">
                  {(page - 1) * rowsPerPage + 1}-
                  {(page - 1) * rowsPerPage + data.length} of {total}
                </span>
                <span
                  className={page === 1 ? 'ms-4' : 'smartTable-pointer ms-4'}
                  onClick={(e) => {
                    e.preventDefault();
                    if (page === 1) return;
                    setPage(page - 1);
                    fetchData(buildQueryString(search, page - 1, rowsPerPage));
                  }}
                >
                  <SVGChevronLeft
                    color={page === 1 ? 'lightgray' : undefined}
                  />
                </span>
                <span
                  className={
                    page * rowsPerPage >= total
                      ? 'ms-4'
                      : 'smartTable-pointer ms-4'
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if ((page - 1) * rowsPerPage > total) return;
                    setPage(page + 1);
                    fetchData(buildQueryString(search, page + 1, rowsPerPage));
                  }}
                >
                  <SVGChevronRight
                    color={
                      page * rowsPerPage >= total ? 'lightgray' : undefined
                    }
                  />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

SmartTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.Object),
  rowsPerPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  total: PropTypes.number,
  url: PropTypes.string,
  headCells: PropTypes.arrayOf(
    //means Object
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number, //px
      sortable: PropTypes.bool,
      render: PropTypes.func,
    })
  ),
};

export default SmartTable;