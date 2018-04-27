import { Button } from 'antd';
import { Buttons, ButtonsGroup } from './styles/button.style';
import WithDirection from '../../config/withDirection';

const AntButton = Buttons(Button);
const nnaButton = WithDirection(AntButton);
const AntButtonGroup = ButtonsGroup(Button.Group);
const ButtonGroup = WithDirection(AntButtonGroup);

export default nnaButton;
export { ButtonGroup };
