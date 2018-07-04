#!/bin/bash

set -e

parcel build src/index.html
aws s3 sync --acl public-read --sse --delete ./dist s3://www.sturmgruppe-granit.com
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E2GYMCW6MQ754P --paths '/*'
