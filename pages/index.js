// import React from 'react';
// import Layout from '../components/Layout';
// import Button from '../components/Button';
// import { Link, animateScroll as scroll } from 'react-scroll';

// export default function Home() {
//   return (
//     <Layout>
//       <section id="hero" className="flex flex-col items-center justify-center h-screen bg-gray-200">
//         <h1 className="text-5xl mb-6">Welcome to My Landing Page</h1>
//         <p className="text-xl mb-6">This is an awesome landing page made with Next.js, TailwindCSS, and ShadCN.</p>
//         <Link to="contact" smooth={true}>
//           <Button>Contact Us</Button>
//         </Link>
//       </section>
//       <section id="features" className="p-8 bg-white">
//         <h2 className="text-3xl mb-4">Features</h2>
//         <p>Here are some amazing features of our product.</p>
//       </section>
//       <section id="contact" className="p-8 bg-gray-200">
//         <h2 className="text-3xl mb-4">Contact Us</h2>
//         <form className="flex flex-col">
//           <input type="text" placeholder="Name" className="p-2 mb-4 border rounded" />
//           <input type="email" placeholder="Email" className="p-2 mb-4 border rounded" />
//           <textarea placeholder="Message" className="p-2 mb-4 border rounded"></textarea>
//           <Button type="submit">Submit</Button>
//         </form>
//       </section>
//     </Layout>
//   );
// }
import React from 'react';
import { Link } from 'react-scroll';
import Button from '../components/Button';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.900" color="white">
      <Box as="section" id="hero" textAlign="center">
        <Heading as="h1" size="2xl" mb="6">Welcome to My Landing Page</Heading>
        <Text fontSize="xl" mb="6">This is an awesome landing page made with Next.js, TailwindCSS, and Chakra UI.</Text>
        <Link to="contact" smooth={true}>
          <Button>Contact Us</Button>
        </Link>
      </Box>
      <Box as="section" id="features" p="8" bg="gray.800" w="full">
        <Heading as="h2" size="xl" mb="4">Features</Heading>
        <Text>Here are some amazing features of our product.</Text>
      </Box>
      <Box as="section" id="contact" p="8" bg="gray.900" w="full">
        <Heading as="h2" size="xl" mb="4">Contact Us</Heading>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" className="p-2 mb-4 border rounded outline-none text-black" />
          <input type="email" placeholder="Email" className="p-2 mb-4 border rounded outline-none text-black" />
          <textarea placeholder="Message" className="p-2 mb-4 border rounded outline-none text-black"></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Flex>
  );
}
