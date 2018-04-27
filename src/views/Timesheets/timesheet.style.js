import styled from "styled-components";
import { palette } from "styled-theme";
import { transition, borderRadius } from "../../config/style-util";
import WithDirection from "../../config/withDirection";
const WDTimesheerWrapper = styled.div`
`;

const TimesheerWrapper = WithDirection(WDTimesheerWrapper);

export { TimesheerWrapper };