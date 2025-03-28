import Home from 'components/home-page/home';
import PageLayout from 'components/layouts/pageLayout';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <PageLayout title="Muhammad Farras Jibran - Full Stack Developer">
      <Home />
    </PageLayout>
  );
};

export default Index;
