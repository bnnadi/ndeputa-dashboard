import { Pagination } from 'antd';
import AntPagination from './styles/pagination.style';
import WithDirection from '../../config/withDirection';

const Paginations = AntPagination(Pagination);
const nnaPagination = WithDirection(Paginations);

export default nnaPagination;
