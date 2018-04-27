import styled from "styled-components";
import { palette } from "styled-theme";
import { transition, borderRadius } from "../../config/style-util";
import WithDirection from "../../config/withDirection";
const WDProfileWrapper = styled.div`
`;

const ProfileWrapper = WithDirection(WDProfileWrapper);

export { ProfileWrapper };