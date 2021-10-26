import { NormalizedSettings } from "../types";
declare type Props = {
    name: string;
    url: string;
} | {
    name: string;
    url?: string;
} | {
    name?: string;
    url: string;
};
declare const _default: ({ name, url }: Props) => Promise<NormalizedSettings>;
export default _default;
