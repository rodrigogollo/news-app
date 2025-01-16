import * as token from "./token"

type TestsType = {
  expectedType: token.TokenType,
  expectedLiteral: string
}

const tests: TestsType[] = [
  { token.ASSIGN, "=" },
  { token.PLUS, "+" },
  { token.LPAREN, "(" },
  { token.RPAREN, ")" },
  { token.LBRACE, "{" },
  { token.RBRACE, "}" },
  { token.COMMA, "," },
  { token.SEMICOLON, ";" },
  { token.EOF, "" },
]

let l = New(input)

for ((idx, tt) of Array.entries(tests)) {
  let tok = l.NextToken();

  if (tok.Type != tt.expectedType) {
    console.log(`${tests[idx]} - tokentype wrong. expected = ${tt.expectedType}, got = ${tok.Type}`)
  }

  if (tok.Literal != tt.expectedLiteral) {
    console.log(`${tests[idx]} - tokentype wrong. expected = ${tt.expectedLiteral}, got = ${tok.Literal}`)
  }
}
