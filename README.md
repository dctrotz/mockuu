<div align="center">
  <img src="">

  ![GitHub releases](https://img.shields.io/github/release/MateeoCodes/mockuu)
  ![GitHub stars](https://img.shields.io/github/stars/MateeoCodes/mockuu)
  ![GitHub issues](https://img.shields.io/github/issues/MateeoCodes/mockuu)
  ![GitHub license](https://img.shields.io/github/license/MateeoCodes/mockuu)
</div>

## 🤔 About

**Mockuu** is a simplified way to generate fake user data.

## 🎉 Features

- 📦 +15 functions

## 📦 Install

```bash
npm install mockuu
```

## Usage

```ts
import { rFullName, rPassword } from 'mockuu'

const name = rFullName()

const password = rPassword({ size: 20, symbolsChars: true })
```

## 💎 Modules

| Module             | Example                | Output                    |
| ------------------ | ---------------------- | ------------------------- |
| Avatar             | `rAvatar()`            | https://i.pravatar.cc/200 |
| Age                | `rAge()`               | 40                        |
| Cardinal direction | `rCardenalDirection()` | Northeast                 |
| City               | `rCity()`              | East Los Angeles          |
| Country            | `rCountry()`           | Chile                     |
| Domain suffix      | `rDomainSuffix()`      | com                       |
| Email              | `rEmail()`             | Isaac_Hen@aol.org         |
| Email provider     | `rEmailProvider()`     | mail                      |
| First name         | `rFirstName()`         | Andre                     |
| Full name          | `rFullName()`          | Lisa Hartmann             |
| Gender             | `rGender()`            | Woman                     |
| Last name          | `rLastName()`          | Harrison                  |
| Password           | `rPassword()`          | KKmD3sMIcg@vPg^KTZ9>      |
| Pronoun            | `rPronoun()`           | They/Them                 |
| Username           | `rUsername()`          | Rosemarie_Chebet          |

## 🔑 License

[MIT](https://githuhttps://github.com/MateeoCodes/mockuu/blob/main/LICENSE)
