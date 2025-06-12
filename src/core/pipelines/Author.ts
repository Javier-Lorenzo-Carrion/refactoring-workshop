/*
Refactoring to pipelines by Martin Fowler:

https://martinfowler.com/articles/refactoring-pipelines.html
 */

export class Author {
	constructor(
		readonly company: string,
		readonly twitterHandle: string
	) {}
}

export function collectTwitterHandlesBy(authors: Author[], company: string): string[] {
	return authors
		.filter((author: Author): boolean => author.company === company && author.twitterHandle != null)
		.map((author: Author): string => author.twitterHandle);
}