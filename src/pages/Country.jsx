import { Container, CountryInfo, Heading, Loader, Section } from 'components';
import { useFetchCountry } from 'hooks';

const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong..." bottom />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};
export default Country;
