import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class ProductInput {
 
  @Field(() => Int, { description: 'Example field (placeholder)' })
    id:          number
  @Field(() => Int, { description: 'Example field (placeholder)' })
    title:       string
  @Field(() => Int, { description: 'Example field (placeholder)' })
    price:       string
  @Field(() => Int, { description: 'Example field (placeholder)' })
    category:    string
  @Field(() => Int, { description: 'Example field (placeholder)' })
    description: string
  @Field(() => Int, { description: 'Example field (placeholder)' })
    image:       string
}


