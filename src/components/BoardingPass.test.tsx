import { describe, expect, it } from 'vitest'
import { BoardingPass } from './BoardingPass'

describe('BoardingPass', () => {
  it('renders', () => {
    expect(BoardingPass({ pass: { booking: 'ABC123', passenger: 'A', flight: 'OA123', seat: '12A', boarding: '08:50', group: '2' } })).toBeTruthy()
  })
})
