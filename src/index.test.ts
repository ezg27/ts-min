import { assert, test } from 'vitest'
import { hello } from '~/index'

test('simple', () => {
  assert.equal(hello, 'there')
})
