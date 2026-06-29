import Converter from './Converter'

// Reads ?from=, ?to= & ?text= query params to preselect the dropdowns and prefill the
// input, e.g. ?from=ipa&to=arabic&text=hello
export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ from?: string | string[]; to?: string | string[]; text?: string | string[] }>
}) {
	const sp = await searchParams
	const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v)
	return <Converter from={first(sp.from)} to={first(sp.to)} text={first(sp.text)}/>
}
