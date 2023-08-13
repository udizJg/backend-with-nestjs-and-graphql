import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  price: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  category: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  image: string;
}
