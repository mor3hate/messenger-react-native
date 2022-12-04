export const pairedId = (fromId: string, toId: string) => {
	return [fromId, toId].sort().join('_')
}
