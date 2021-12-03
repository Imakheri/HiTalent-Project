import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


export default function TalentCard({ title, username, description, image, cost, id }) {

//HARCODEADO
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <div>

      <Box m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={image} alt="talent_image" />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            {/* <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge> */}
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {id}
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {title}
          </Box>

          <Box>
            {description}
          </Box>
  
          <Box>
            <Box as='span' color='gray.600' fontSize='sm'>
              $
            </Box>
            {cost}
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              <Link to={'/talent/' + id}>
              <Button>
                  Ver mas
              </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      </div>
    )
  }