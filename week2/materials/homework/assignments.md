## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

website url: `https://jyothi-week2-homework.s3.amazonaws.com/index.html`

bucket url:`https://s3.console.aws.amazon.com/s3/buckets/jyothi-week2-homework?region=us-east-1&tab=objects`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name: `Amazon S3`

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: `$0.023 per GB 51*1000=51000GB * 0.023 = 1173$`

Total size of website: `?`

**Assignment 7:**

Write down the main cost factors for S3

brief description: `First 50 TB / Month $0.023 per GB Next 450 TB / Month $0.022 per GB Over 500 TB / Month $0.021 per GB`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs: `aws s3 cp /Users/jyothinandyala/Desktop/Serverless/serverless/week2/materials/homework/products.json s3://jyothi-week2-homework`

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment:

use case: `?`

command:

## Optional assignments:

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `Clean up incomplete multipart uploads. Delete previous versions of objects that you don't need. Review your storage-class transition costs. Review your data retrieval costs. Track the requests made to your bucket. Check for changes in the size of your bucket. Review the cost of individual buckets. Understand how your usage relates to your charges.`

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `Encryption. Amazon S3 supports both server-side encryption (with three key management options: SSE-KMS, SSE-C, SSE-S3) and client-side encryption for data uploads. Amazon S3 offers flexible security features to block unauthorized users from accessing your data.`
