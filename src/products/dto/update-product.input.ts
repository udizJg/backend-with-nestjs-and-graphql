import { ProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(ProductInput) {
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
  @Field(() =>String, { description: 'Example field (placeholder)' })
  image: string;
}
