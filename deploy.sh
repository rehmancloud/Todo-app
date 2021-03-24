#!/bin/bash                                                                     
echo "Build has started..."
npm run build && \
echo "Build has completed" && \
cd build && \
echo "Uploading to s3 bucket" && \
aws s3 sync . s3://todo-appsync/ --acl public-read && \
echo "*****SUCCESSFULLY UPLOADED TO S3*****" && \
exit 0
