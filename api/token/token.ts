type TokenType = string

type Token = {
  Type: TokenType;
  Literal: string;
}

const ILLEGAL = "ILLEGAL"
const EOF = "EOF"

// Identifiers + literals
const IDENT = "IDENT" // add, foobar, x, y
const INT = "INT" // 123456

// Operators
const ASSIGN = "="
const PLUS = "+"

//Delimiters
const COMMA = ","

const LPAREN = "("
const RPAREN = ")"
const LBRACE = "{"
const RBRACE = "}"

// Keywords
const FUNCTION = "FUNCTION"
const LET = "LET"


