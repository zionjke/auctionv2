import React, { type FC } from 'react';
import { NotFoundPageComponent } from 'pages/NotFound/ui/NotFoundPageComponent';

interface NotFoundPageProps {
  className?: string
}
const NotFoundPageContainer: FC<NotFoundPageProps> = ({ className }) => (
    <NotFoundPageComponent />
);

export default NotFoundPageContainer;
