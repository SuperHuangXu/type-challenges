/**
 * 元组转换为对象
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md
 */

/* _____________ 你的代码 _____________ */
type Keys = keyof any
type TupleToObject<T extends readonly [Keys, ...any]> = {
  [K in T[number]]: K
}

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>
  >
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
