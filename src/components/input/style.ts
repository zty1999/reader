import styled from "vue3-styled-component";

import { withInstall } from '@/utils/install'
export const styledBaseInput = withInstall(styled.input`
width: 100%;
height: 40px;
border:none;
outline:none;
border-radius: 6px;

`)