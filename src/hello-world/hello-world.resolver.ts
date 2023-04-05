import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Hola Mundo es lo que retorna',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => Float, {
    name: 'randomNumber',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'From zero to argumento TO (default 6)',
  })
  getRandomFromZeroTo(
    @Args('to', {
      type: () => Int,
      nullable: true,
      defaultValue: 6,
    })
    to: number,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
