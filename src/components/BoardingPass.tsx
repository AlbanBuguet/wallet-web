import type { BoardingPass as Pass } from '../api/types'

const assets = import.meta.env.VITE_ASSETS_URL ?? 'https://opco-a-trip-wallet-prod-pass-assets.s3.eu-west-1.amazonaws.com'

export function BoardingPass({ pass }: { pass: Pass }) {
  return (
    <article className="pass">
      <img src={`${assets}/logo.png`} alt="OpCo A" />
      <h2>{pass.flight}</h2>
      <dl>
        <dt>Seat</dt>
        <dd>{pass.seat}</dd>
        <dt>Gate</dt>
        <dd>{pass.gate ?? 'Soon'}</dd>
        <dt>Boarding</dt>
        <dd>{pass.boarding}</dd>
        <dt>Group</dt>
        <dd>{pass.group}</dd>
      </dl>
    </article>
  )
}
