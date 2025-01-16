export type TokenType = string

export type Token = {
  Type: TokenType;
  Literal: string;
}

export const ILLEGAL = "ILLEGAL"
export const EOF = "EOF"

// Identifiers + literals
export const IDENT = "IDENT" // add, foobar, x, y
export const INT = "INT" // 123456

// Operators
export const ASSIGN = "="
export const PLUS = "+"
export const HEADER1 = "#"

//Delimiters
export const COMMA = ","

export const LPAREN = "("
export const RPAREN = ")"
export const LBRACE = "{"
export const RBRACE = "}"

// Keywords
export const FUNCTION = "FUNCTION"
export const LET = "LET"

