import Converter from './Converter'

// Reads ?from= & ?to= query params and preselects the dropdowns (e.g. ?from=ipa&to=arabic).
export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ from?: string | string[]; to?: string | string[] }>
}) {
	const sp = await searchParams
	const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v)
	return <Converter from={first(sp.from)} to={first(sp.to)}/>
}
