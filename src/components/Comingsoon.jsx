import { Container, Box } from '@chakra-ui/react';

function Comingsoon() {
  return (
    <>
      <Container
        display={flex}
        justifyContent={center}
        alignItems={center}
        width={100}
        heighg={100}
      >
        <Box
          width={100}
          height={auto}
          bgImage={'../../public/images/hero.jpg'}
          bgSize={cover}
          bgPosition={center}
          bgRepeat={'no-repeat'}
        >
          <Box position={fixed} right={0} bottom={20}>
            <h2>heading</h2>
            <p>subheading</p>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Comingsoon;
