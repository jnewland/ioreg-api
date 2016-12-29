# ioreg-api

ioreg-api is a simple REST service allowing you to remotely query selected values from the I/O Kit registry of a mac.

## Docs

### Resources

Only one resources is implemented at this time.

#### HIDIdleTime Resource

The HIDIdleTime resource returns the time in seconds since the last keyboard/mouse interaction.

```json
$ curl http://localhost:8282/HIDIdleTime
0.052250949
```

## Setup

    script/bootstrap

## Running It

    script/server

ioreg-api will run on port `8282` by default. Use the `PORT` environment
variable to use your own port.

### Forever

ioreg-api has support for [Forever](https://github.com/foreverjs/forever). It uses `launchd` on OS X to kick it off so that it starts on boot.

### Development

You can simply run it by calling `script/server`. This will run it in development mode with logging to standard out.

### Install as Service on OS X

    script/install

## Logging

ioreg-api logs all of its requests. In `production`, it logs to a file at `log/logs.log`. In `development` mode, it just logs to stdout.

## Contributions

* fork
* create a feature branch
* open a Pull Request
