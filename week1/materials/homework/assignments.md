#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: `aws s3 ls`

doc: `https://docs.aws.amazon.com/cli/latest/reference/s3/ls.html`

number of buckets: `11`

**Assignment 2:**
filename: `week3-homework.mkv`

## Optional Assignments

**Assignment 1:**

command: `aws s3 presign s3://hyf-products-bucket/week3-homework.mkv --expires-in 60`

url: `https://hyf-products-bucket.s3.amazonaws.com/week3-homework.mkv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210905T140154Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=36f46986f882079add6a5fa132d2813fd2e2ee490bfa80b32784c37bf3f720c0`
**Assignment 2:**
command: `aws s3 ls --summarize --human-readable s3://hyf-products-bucket`
total size:`1.1 GiB`
