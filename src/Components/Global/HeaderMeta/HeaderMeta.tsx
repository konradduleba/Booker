import React from 'react';
import { Helmet } from "react-helmet-async";
import IHeaderMeta from './Types/IHeaderMeta';

const HeaderMeta = ({ title }: IHeaderMeta): JSX.Element => (
    <Helmet>
        <title>TheBooker | {title}</title>
    </Helmet>
);

export default HeaderMeta;