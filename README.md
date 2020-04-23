# exporteer\_feedly

This is a very simple tool for exporting your data from Feedly.

It uses [puppeteer](https://github.com/puppeteer/puppeteer) to retrieve your OPML export from the Feedly website.
The advantage of this strategy over using the API is that you do not need an API token (which, if I understand correctly, have to be manually refreshed for free accounts).

## Setup

1. Install node.js and npm
2. `npm install -g exporteer_feedly`

## Usage

```bash
export FEEDLY_EMAIL=your_account_email
export FEEDLY_PASSWORD=your_account_password
exporteer_feedly > out.opml.xml
```

This will write the OPML to the given file.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/brokensandals/exporteer_feedly.

## License

This is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
