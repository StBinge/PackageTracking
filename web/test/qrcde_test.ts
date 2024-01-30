import {validate_code} from "../src/components/QRCode"

console.assert(validate_code('20240129150396123'))
console.assert(validate_code('2024012915039612'))