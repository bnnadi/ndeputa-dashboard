import { Select } from 'antd';
import { AntSelect } from './styles/select.style';
import WithDirection from '../../config/withDirection';

const WDSelect = AntSelect(Select);
const nnaSelect = WithDirection(WDSelect);
const SelectOption = Select.Option;

export default nnaSelect;
export { SelectOption };
