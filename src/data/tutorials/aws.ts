import { TutorialChapter } from '../../types';

export const awsChapters: TutorialChapter[] = [
  // 1. AWS HOME
  {
    id: 'aws-home',
    title: 'AWS Cloud HOME',
    slug: 'aws-home',
    summary: 'Amazon Web Services (AWS) is the world\'s most comprehensive and broadly adopted cloud platform.',
    readTime: '4 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon Web Services (AWS) offers over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—use AWS to lower costs, become more agile, and innovate faster.',
      sections: [
        {
          heading: 'Core Cloud Value Proposition',
          body: 'Instead of purchasing physical servers and maintaining on-premises data centers, AWS allows you to provision compute, storage, networking, and AI on demand with pay-as-you-go pricing.',
          code: `# AWS CLI: Verify your cloud identity
$ aws sts get-caller-identity
{
    "UserId": "AIDASAMPLESOMETHING",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/DevAuraAdmin"
}`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">AWS Cloud Console Dashboard</h3>
    <div style="display:flex; gap:12px; margin-top:12px;">
      <div style="background:#fff; border:1px solid #cbd5e1; padding:12px; border-radius:6px; flex:1;">
        <strong style="color:#0284c7;">EC2 Instances</strong>
        <p style="font-size:24px; margin:4px 0 0; color:#0f172a;">8 Running</p>
      </div>
      <div style="background:#fff; border:1px solid #cbd5e1; padding:12px; border-radius:6px; flex:1;">
        <strong style="color:#0284c7;">S3 Buckets</strong>
        <p style="font-size:24px; margin:4px 0 0; color:#0f172a;">14 Active</p>
      </div>
      <div style="background:#fff; border:1px solid #cbd5e1; padding:12px; border-radius:6px; flex:1;">
        <strong style="color:#0284c7;">Lambda Functions</strong>
        <p style="font-size:24px; margin:4px 0 0; color:#0f172a;">42 Deployed</p>
      </div>
    </div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. AWS Intro
  {
    id: 'aws-intro',
    title: 'AWS Cloud Computing Introduction',
    slug: 'aws-intro',
    summary: 'Cloud service models (IaaS, PaaS, SaaS) and deployment types (Public, Private, Hybrid).',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. It replaces capital expense (CapEx) with variable operational expense (OpEx).',
      sections: [
        {
          heading: 'IaaS vs PaaS vs SaaS',
          body: 'Understanding the shared responsibility division:',
          code: `// Cloud Service Models:
// 1. IaaS (Infrastructure as a Service): AWS EC2, VPC, EBS
//    - You manage: OS, Runtime, App, Data. AWS manages: Physical hardware, virtualization.
// 2. PaaS (Platform as a Service): AWS Elastic Beanstalk, RDS, Lambda
//    - You manage: Application code and data. AWS manages: OS patching, runtime.
// 3. SaaS (Software as a Service): AWS QuickSight, WorkSpaces
//    - You manage: User access and usage. AWS manages: Everything else.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Cloud Advantages:</h4>
    <ul style="color:#334155; line-height:1.7;">
      <li><strong>Trade capital expense for variable expense</strong></li>
      <li><strong>Benefit from massive economies of scale</strong></li>
      <li><strong>Stop guessing capacity (auto-scaling)</strong></li>
      <li><strong>Increase speed and agility</strong></li>
      <li><strong>Go global in minutes</strong></li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. AWS Global Infrastructure
  {
    id: 'aws-global-infrastructure',
    title: 'AWS Global Infrastructure',
    slug: 'aws-global-infrastructure',
    summary: 'Regions, Availability Zones (AZs), Edge Locations, and Regional Data Centers.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'The AWS Global Infrastructure is built around AWS Regions and Availability Zones. A Region is a physical location in the world where AWS has multiple Availability Zones. An AZ consists of one or more discrete data centers with redundant power, networking, and connectivity.',
      sections: [
        {
          heading: 'Regions and Availability Zones',
          body: 'Regions are named geographically (e.g., us-east-1, eu-west-1, ap-south-1). Each Region contains at least 3 isolated AZs (e.g., us-east-1a, us-east-1b, us-east-1c).',
          code: `# List active AWS regions via CLI
$ aws ec2 describe-regions --output table
----------------------------------------------------------
|                     DescribeRegions                    |
+-----------------------------------+--------------------+
|             Endpoint              |    RegionName      |
+-----------------------------------+--------------------+
| ec2.us-east-1.amazonaws.com       | us-east-1          |
| ec2.us-west-2.amazonaws.com       | us-west-2          |
| ec2.eu-west-1.amazonaws.com       | eu-west-1          |
| ec2.ap-south-1.amazonaws.com      | ap-south-1         |
+-----------------------------------+--------------------+`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Global Infrastructure Topology:</h4>
    <p><strong>Region (e.g. us-east-1 Virginia):</strong></p>
    <div style="display:flex; gap:10px;">
      <div style="background:#fff; border:1px solid #6366f1; padding:8px 14px; border-radius:4px;">AZ 1 (us-east-1a)</div>
      <div style="background:#fff; border:1px solid #6366f1; padding:8px 14px; border-radius:4px;">AZ 2 (us-east-1b)</div>
      <div style="background:#fff; border:1px solid #6366f1; padding:8px 14px; border-radius:4px;">AZ 3 (us-east-1c)</div>
    </div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. AWS IAM
  {
    id: 'aws-iam',
    title: 'AWS IAM (Identity & Access Management)',
    slug: 'aws-iam',
    summary: 'Users, User Groups, Roles, JSON IAM Policies, and Principle of Least Privilege.',
    readTime: '6 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.',
      sections: [
        {
          heading: 'IAM Policy JSON Anatomy',
          body: 'IAM Policies are JSON documents containing Effect, Action, Resource, and Condition:',
          code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3ReadOnly",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::devaura-assets",
        "arn:aws:s3:::devaura-assets/*"
      ]
    }
  ]
}`,
          codeLanguage: 'json',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    <span style="color:#a855f7;">IAM Rule:</span> Principle of Least Privilege<br>
    Only grant users and roles the absolute minimum set of API actions required to perform their specific duty.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. AWS EC2
  {
    id: 'aws-ec2',
    title: 'AWS EC2 (Elastic Compute Cloud)',
    slug: 'aws-ec2',
    summary: 'Virtual machines in the cloud, Amazon Machine Images (AMIs), and instance sizing.',
    readTime: '6 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the AWS Cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.',
      sections: [
        {
          heading: 'Instance Types and Launching',
          body: 'Instance families: General Purpose (t4g, m6i), Compute Optimized (c7g), Memory Optimized (r7g), Storage Optimized (i3en).',
          code: `# Launching an Ubuntu EC2 instance with AWS CLI
$ aws ec2 run-instances \\
    --image-id ami-0c7217cdde317cfec \\
    --count 1 \\
    --instance-type t3.micro \\
    --key-name DevAuraKey \\
    --security-group-ids sg-0123456789abcdef0 \\
    --subnet-id subnet-0123456789abcdef0`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">EC2 Instance Lifecycle:</h4>
    <p>Pending &rarr; <span style="color:#4f46e5; font-weight:bold;">Running</span> &rarr; Stopping &rarr; Stopped &rarr; Terminated</p>
    <p style="color:#64748b; font-size:13px;">Billing only occurs when instances are in the Running state.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. AWS EC2 Security Groups
  {
    id: 'aws-ec2-security-groups',
    title: 'AWS EC2 Security Groups & Key Pairs',
    slug: 'aws-ec2-security-groups',
    summary: 'Virtual stateful firewalls controlling inbound and outbound traffic to instances.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'A security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic. Inbound rules control incoming traffic to your instance, and outbound rules control outgoing traffic.',
      sections: [
        {
          heading: 'Security Group Stateful Rules',
          body: 'Security groups are stateful: if you send a request from your instance, the response traffic is automatically allowed regardless of inbound rules.',
          code: `# Inbound rules for a Web Server Security Group:
# Type: SSH   | Port: 22   | Source: 203.0.113.25/32 (My Admin IP)
# Type: HTTP  | Port: 80   | Source: 0.0.0.0/0 (Everywhere)
# Type: HTTPS | Port: 443  | Source: 0.0.0.0/0 (Everywhere)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <table style="width:100%; border-collapse:collapse; font-size:14px;">
    <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
      <th style="padding:6px;">Type</th><th style="padding:6px;">Port</th><th style="padding:6px;">Protocol</th><th style="padding:6px;">Source</th>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px;">HTTP</td><td style="padding:6px;">80</td><td style="padding:6px;">TCP</td><td style="padding:6px;">0.0.0.0/0</td></tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px;">HTTPS</td><td style="padding:6px;">443</td><td style="padding:6px;">TCP</td><td style="padding:6px;">0.0.0.0/0</td></tr>
    <tr><td style="padding:6px;">SSH</td><td style="padding:6px;">22</td><td style="padding:6px;">TCP</td><td style="padding:6px;">Your-IP/32</td></tr>
  </table>
</body>
</html>`
        }
      ]
    }
  },

  // 7. AWS S3
  {
    id: 'aws-s3',
    title: 'AWS S3 (Simple Storage Service)',
    slug: 'aws-s3',
    summary: 'Object storage with 99.999999999% (11 9s) of durability, buckets, and objects.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. You store data in buckets with unique global names.',
      sections: [
        {
          heading: 'Buckets and Objects via AWS CLI',
          body: 'Working with S3 buckets and uploading assets:',
          code: `# Create S3 bucket
$ aws s3 mb s3://devaura-production-media-2026

# Upload files to S3
$ aws s3 cp ./logo.png s3://devaura-production-media-2026/images/logo.png

# Sync local build directory to S3
$ aws s3 sync ./dist s3://devaura-production-media-2026/`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    upload: ./dist/index.html to s3://devaura-production-media-2026/index.html<br>
    upload: ./dist/assets/app.js to s3://devaura-production-media-2026/assets/app.js<br>
    <span style="color:#4ade80;">S3 Sync Completed: 2 files transferred.</span>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. AWS S3 Storage Classes
  {
    id: 'aws-s3-storage-classes',
    title: 'AWS S3 Storage Classes',
    slug: 'aws-s3-storage-classes',
    summary: 'S3 Standard, Intelligent-Tiering, Standard-IA, Glacier Flexible, and Deep Archive.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'S3 offers a range of storage classes designed for different data access patterns to drastically reduce costs.',
      sections: [
        {
          heading: 'Storage Classes Cost Matrix',
          body: 'Choosing the right storage tier:',
          code: `// S3 Storage Tier Hierarchy:
// 1. S3 Standard: Millisecond access, frequent access.
// 2. S3 Intelligent-Tiering: Automatic cost savings for unknown access patterns.
// 3. S3 Standard-IA: Lower storage cost, retrieval fee for infrequent access.
// 4. S3 Glacier Instant Retrieval: Low-cost storage with ms retrieval for archives.
// 5. S3 Glacier Flexible: Minutes to hours retrieval, rock-bottom cost.
// 6. S3 Glacier Deep Archive: Lowest cost (~$0.00099/GB/mo), 12-hour retrieval.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Cost Comparison per GB/month:</h4>
    <p>S3 Standard: ~\$0.023 / GB</p>
    <p>S3 Standard-IA: ~\$0.0125 / GB</p>
    <p>S3 Glacier Flexible: ~\$0.004 / GB</p>
    <p style="color:#4f46e5; font-weight:bold;">S3 Glacier Deep Archive: ~\$0.00099 / GB</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. AWS S3 Static Website Hosting
  {
    id: 'aws-s3-website',
    title: 'AWS S3 Static Website Hosting',
    slug: 'aws-s3-website',
    summary: 'Hosting HTML, CSS, and SPA frontend bundles directly from S3 without web servers.',
    readTime: '4 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'You can use Amazon S3 to host a static website. On a static website, individual webpages include static content (HTML, CSS, JS, images). They might also contain client-side scripts.',
      sections: [
        {
          heading: 'Enabling Static Website Hosting',
          body: 'Configuring index.html and error.html:',
          code: `# Configure website endpoint
$ aws s3 website s3://devaura-app-bucket/ \\
    --index-document index.html \\
    --error-document index.html

# Endpoint URL format:
# http://devaura-app-bucket.s3-website.us-east-1.amazonaws.com`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Website endpoint active:<br>
    http://devaura-app-bucket.s3-website.us-east-1.amazonaws.com
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. AWS VPC
  {
    id: 'aws-vpc',
    title: 'AWS VPC (Virtual Private Cloud)',
    slug: 'aws-vpc',
    summary: 'Isolated private cloud networks, IPv4 CIDR blocks, and public vs private subnets.',
    readTime: '6 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you\'ve defined. This virtual network closely resembles a traditional network that you\'d operate in your own data center, with the benefits of using the scalable infrastructure of AWS.',
      sections: [
        {
          heading: 'VPC CIDR Architecture',
          body: 'A typical VPC setup uses a /16 CIDR block like 10.0.0.0/16 providing 65,536 private IP addresses.',
          code: `# Creating VPC and Subnets via AWS CLI
$ aws ec2 create-vpc --cidr-block 10.0.0.0/16

# Public Subnet (Internet accessible for Load Balancers)
$ aws ec2 create-subnet --vpc-id vpc-123456 --cidr-block 10.0.1.0/24 --availability-zone us-east-1a

# Private Subnet (Backend Databases & Application servers)
$ aws ec2 create-subnet --vpc-id vpc-123456 --cidr-block 10.0.2.0/24 --availability-zone us-east-1a`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">VPC Isolation Model</h4>
    <p><strong>Public Subnet (10.0.1.0/24):</strong> Has direct route to Internet Gateway (ALB, NGINX)</p>
    <p><strong>Private Subnet (10.0.2.0/24):</strong> No inbound internet; uses NAT Gateway for updates (RDS, Microservices)</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. AWS VPC Routing
  {
    id: 'aws-vpc-routing',
    title: 'AWS VPC Routing & Internet/NAT Gateways',
    slug: 'aws-vpc-routing',
    summary: 'Internet Gateways (IGW), NAT Gateways, and Route Tables connecting subnets to the web.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'An Internet Gateway (IGW) enables communication between your VPC and the internet. A NAT Gateway allows instances in a private subnet to connect to services outside your VPC (such as software updates) without allowing external internet connections into the instances.',
      sections: [
        {
          heading: 'Route Table Rules',
          body: 'Routing destination 0.0.0.0/0 to target igw-xxxx for public subnets, and nat-xxxx for private subnets.',
          code: `# Public Subnet Route Table:
# Destination: 10.0.0.0/16 -> Target: local
# Destination: 0.0.0.0/0   -> Target: igw-0a1b2c3d4e5f

# Private Subnet Route Table:
# Destination: 10.0.0.0/16 -> Target: local
# Destination: 0.0.0.0/0   -> Target: nat-0123456789abc`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Traffic Routing Flow:<br>
    Private EC2 &rarr; NAT Gateway &rarr; Internet Gateway &rarr; Public Internet
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. AWS RDS
  {
    id: 'aws-rds',
    title: 'AWS RDS & Aurora Databases',
    slug: 'aws-rds',
    summary: 'Managed relational databases (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server) and Amazon Aurora.',
    readTime: '6 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon Relational Database Service (Amazon RDS) is a collection of managed services that makes it simple to set up, operate, and scale databases in the cloud. It manages backups, OS patches, automated failovers, and read scaling.',
      sections: [
        {
          heading: 'Multi-AZ Deployments & Read Replicas',
          body: 'Multi-AZ provides synchronous replication to a standby instance in another AZ for disaster recovery. Read Replicas provide asynchronous read scaling.',
          code: `# Launch a PostgreSQL RDS instance via CLI
$ aws rds create-db-instance \\
    --db-instance-identifier devaura-postgres-db \\
    --db-instance-class db.t4g.medium \\
    --engine postgres \\
    --master-username dbadmin \\
    --master-user-password SuperSecretPassword123! \\
    --allocated-storage 50 \\
    --multi-az`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Amazon Aurora Advantage:</h4>
    <p>Cloud-native database engineered by AWS that provides up to <strong>5x the throughput of MySQL</strong> and <strong>3x PostgreSQL</strong> with self-healing distributed NVMe storage replicated 6 times across 3 AZs.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. AWS DynamoDB
  {
    id: 'aws-dynamodb',
    title: 'AWS DynamoDB (Managed NoSQL)',
    slug: 'aws-dynamodb',
    summary: 'Single-digit millisecond latency at any scale with serverless NoSQL key-value and document tables.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. It offers built-in security, continuous backups, automated multi-Region replication, and data caching.',
      sections: [
        {
          heading: 'Partition Keys and Sort Keys',
          body: 'Primary keys can be a single Partition Key (HASH) or a Composite Key (Partition Key + Sort Key RANGE):',
          code: `# Insert an item into DynamoDB via AWS CLI
$ aws dynamodb put-item \\
    --table-name Users \\
    --item '{
        "UserId": {"S": "usr_99120"},
        "Email": {"S": "developer@devaura.dev"},
        "Tier": {"S": "Enterprise"},
        "TokensUsed": {"N": "14500"}
    }'`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Item successfully stored in DynamoDB table "Users".<br>
    Response Latency: 4ms
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. AWS Lambda
  {
    id: 'aws-lambda',
    title: 'AWS Lambda (Serverless Computing)',
    slug: 'aws-lambda',
    summary: 'Run code without provisioning or managing servers. Pay only for the compute time you consume.',
    readTime: '6 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'AWS Lambda is an event-driven, serverless computing platform. It runs code in response to events and automatically manages the computing resources required by that code.',
      sections: [
        {
          heading: 'Node.js Lambda Function Handler',
          body: 'Writing a serverless microservice function:',
          code: `// index.mjs
export const handler = async (event) => {
    console.log("Received event:", JSON.stringify(event));

    const response = {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "Hello from DevAura Serverless AWS Lambda!",
            timestamp: new Date().toISOString()
        })
    };
    return response;
};`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    {<br>
    &nbsp;&nbsp;"message": "Hello from DevAura Serverless AWS Lambda!",<br>
    &nbsp;&nbsp;"timestamp": "2026-11-03T15:30:00.000Z"<br>
    }<br>
    <span style="color:#4ade80;">Duration: 18.24 ms | Billed: 19 ms | Memory: 128 MB</span>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. AWS API Gateway
  {
    id: 'aws-api-gateway',
    title: 'AWS API Gateway',
    slug: 'aws-api-gateway',
    summary: 'Publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs at scale.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services.',
      sections: [
        {
          heading: 'Connecting API Gateway to Lambda',
          body: 'REST HTTP requests trigger Lambda functions seamlessly:',
          code: `# Request path:
# GET https://api.devaura.dev/v1/users/profile
#   -> AWS API Gateway (Validates API Key & Rate Limits)
#   -> Triggers Lambda (handler execution)
#   -> Queries DynamoDB
#   -> Returns JSON Response with HTTP 200 OK`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">API Gateway Capabilities:</h4>
    <ul>
      <li>Traffic management & Rate limiting (Throttling)</li>
      <li>CORS handling for web frontends</li>
      <li>API authorization via Cognito & IAM</li>
      <li>Automatic staging (dev, staging, prod)</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. AWS Elastic Load Balancing
  {
    id: 'aws-elb',
    title: 'AWS Elastic Load Balancing (ALB & NLB)',
    slug: 'aws-elb',
    summary: 'Application Load Balancers (ALB) and Network Load Balancers (NLB) distributing incoming traffic.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones.',
      sections: [
        {
          heading: 'Application Load Balancer (ALB) Features',
          body: 'Operates at Layer 7 (HTTP/HTTPS) supporting path-based routing (/api/* vs /static/*) and TLS termination.',
          code: `# ALB Path-based routing rules:
# Rule 1: IF path == "/api/*" THEN forward to Target Group: API-Microservices
# Rule 2: IF path == "/auth/*" THEN forward to Target Group: Auth-Cluster
# Rule 3: Default THEN forward to Target Group: Frontend-Web`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    ALB Health Check: Healthy (12/12 targets passing)<br>
    Request distributed evenly across 3 Availability Zones.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 17. AWS Auto Scaling
  {
    id: 'aws-auto-scaling',
    title: 'AWS Auto Scaling',
    slug: 'aws-auto-scaling',
    summary: 'Dynamic scaling policies that adjust compute capacity automatically to match changing demand.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.',
      sections: [
        {
          heading: 'Target Tracking Policies',
          body: 'Scale out when average CPU utilization exceeds 70%; scale in when traffic subsides.',
          code: `# Scaling parameters:
# Min Instances: 2
# Desired Instances: 4
# Max Instances: 20
# Metric: Average CPU Utilization > 70% for 3 minutes`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Auto Scaling Reaction:</h4>
    <p>CPU spiked to 88% &rarr; <strong>Auto Scaling launched 2 new EC2 instances</strong> in AZ-b.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. AWS CloudWatch
  {
    id: 'aws-cloudwatch',
    title: 'AWS CloudWatch (Monitoring & Observability)',
    slug: 'aws-cloudwatch',
    summary: 'Real-time metrics, automated alarms, log groups, and centralized observability dashboards.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. CloudWatch monitors your complete AWS stack.',
      sections: [
        {
          heading: 'Metrics, Alarms, and Logs',
          body: 'Setting up automated SNS alert notifications on alarm triggers:',
          code: `# Creating CloudWatch Alarm with CLI
$ aws cloudwatch put-metric-alarm \\
    --alarm-name "HighCPUUtilizationAlarm" \\
    --metric-name CPUUtilization \\
    --namespace AWS/EC2 \\
    --statistic Average \\
    --period 300 \\
    --threshold 80 \\
    --comparison-operator GreaterThanOrEqualToThreshold \\
    --alarm-actions arn:aws:sns:us-east-1:123456789012:DevAuraOpsAlerts`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    CloudWatch Alarm State: OK (CPU is 24.3%)<br>
    Logs ingested: 42,500 events/minute
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 19. AWS Route 53
  {
    id: 'aws-route53',
    title: 'AWS Route 53 (DNS & Traffic Management)',
    slug: 'aws-route53',
    summary: 'Highly available and scalable cloud Domain Name System (DNS) web service.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon Route 53 is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications by translating names like www.example.com into numeric IP addresses.',
      sections: [
        {
          heading: 'Routing Policies',
          body: 'Simple, Weighted, Latency-based, Failover, and Geolocation routing policies:',
          code: `// Route 53 Routing Policies:
// 1. Simple Routing: Default single resource record
// 2. Weighted Routing: Split traffic (e.g., 90% prod, 10% canary test)
// 3. Latency-based: Routes to the AWS Region with lowest latency for user
// 4. Failover: Active-passive disaster recovery failover
// 5. Geolocation: Routes based on user geographic location (country/continent)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Route 53 Alias Record:</h4>
    <p><code>api.devaura.dev &rarr; Alias to ALB (Dualstack.my-alb-1234.us-east-1.elb.amazonaws.com)</code></p>
    <p style="color:#64748b; font-size:13px;">Route 53 Alias queries to AWS resources are completely free of charge!</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 20. AWS CloudFront
  {
    id: 'aws-cloudfront',
    title: 'AWS CloudFront (Content Delivery Network)',
    slug: 'aws-cloudfront',
    summary: 'Fast, secure CDN service delivering data, videos, applications, and APIs to edge locations globally.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.',
      sections: [
        {
          heading: 'Origin & Edge Caching',
          body: 'CloudFront caches static S3 assets and dynamic API responses at over 450+ Points of Presence worldwide.',
          code: `# CloudFront Request Flow:
# 1. User in Tokyo requests https://devaura.dev/app.js
# 2. Request reaches Tokyo Edge Location (Point of Presence)
# 3. Cache HIT: Served in 8ms directly from edge memory!
# 4. Cache MISS: CloudFront retrieves from S3 origin in us-east-1, caches at edge, and returns to user.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    X-Cache: Hit from cloudfront<br>
    Response Time: 6ms<br>
    Server: CloudFront (Edge Node: NRT57-C1)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 21. AWS Containers
  {
    id: 'aws-containers',
    title: 'AWS Containers (ECS, EKS & AWS Fargate)',
    slug: 'aws-containers',
    summary: 'Running Docker containers and Kubernetes clusters with managed and serverless compute.',
    readTime: '6 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'AWS offers Amazon Elastic Container Service (ECS) for lightweight container orchestration, Amazon Elastic Kubernetes Service (EKS) for managed Kubernetes, and AWS Fargate to run containers serverless without managing EC2 instances.',
      sections: [
        {
          heading: 'Fargate Serverless Architecture',
          body: 'With AWS Fargate, you don\'t configure EC2 instances or cluster capacity; you simply specify required CPU and RAM per container task.',
          code: `# Task Definition snippet (Fargate):
{
  "family": "devaura-backend-task",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "containerDefinitions": [
    {
      "name": "api-server",
      "image": "123456789012.dkr.ecr.us-east-1.amazonaws.com/api:v1.4",
      "portMappings": [{ "containerPort": 3000 }]
    }
  ]
}`,
          codeLanguage: 'json',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">AWS Fargate Benefit:</h4>
    <p>Zero server maintenance, zero AMI patching, and per-second billing for exact vCPU/RAM allocated.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 22. AWS SQS & SNS
  {
    id: 'aws-sqs-sns',
    title: 'AWS Messaging (SQS Queues & SNS Pub/Sub)',
    slug: 'aws-sqs-sns',
    summary: 'Decoupling distributed microservices with asynchronous message queues and push notifications.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'Amazon Simple Queue Service (SQS) is a fully managed message queuing service. Amazon Simple Notification Service (SNS) is a fully managed Pub/Sub messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.',
      sections: [
        {
          heading: 'Fan-Out Pattern (SNS &rarr; SQS)',
          body: 'Publish a single event to an SNS topic that fans out to multiple independent SQS queues for parallel processing:',
          code: `# Fan-Out Architecture:
# OrderPlaced Event 
#   -> SNS Topic: "orders-topic"
#       |-> SQS Queue 1: "billing-service-queue"
#       |-> SQS Queue 2: "inventory-service-queue"
#       |-> SQS Queue 3: "notification-email-queue"`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Event: "Order #8491 Created"<br>
    Fanned out to 3 subscriber queues simultaneously in 12ms.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 23. AWS Well-Architected Framework
  {
    id: 'aws-well-architected',
    title: 'AWS Well-Architected Framework',
    slug: 'aws-well-architected',
    summary: 'The 6 Pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.',
    readTime: '6 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure for a variety of applications and workloads.',
      sections: [
        {
          heading: 'The 6 Pillars of Well-Architected Systems',
          body: 'Guidelines used across all enterprise AWS implementations:',
          code: `// 1. Operational Excellence: Run and monitor systems, evolve processes.
// 2. Security: Protect information, systems, and assets (IAM, encryption in transit & rest).
// 3. Reliability: Recover from failures, dynamically allocate resources (Multi-AZ).
// 4. Performance Efficiency: Use compute resources efficiently (Right-sizing, caching).
// 5. Cost Optimization: Avoid unnecessary spending (Spot instances, auto-scaling).
// 6. Sustainability: Minimize environmental impacts of running cloud workloads.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Architectural Scorecard:</h4>
    <p>DevAura Architecture Review: <strong>96% Well-Architected Compliance</strong></p>
    <ul style="color:#334155;">
      <li>Multi-AZ redundancy active across all databases</li>
      <li>Encryption at rest with AWS KMS enabled</li>
      <li>Zero public database access</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 24. AWS Pricing & Free Tier
  {
    id: 'aws-pricing',
    title: 'AWS Pricing, Free Tier & Cost Explorer',
    slug: 'aws-pricing',
    summary: 'Understanding AWS pricing models, 12 months Free Tier, Always Free services, and AWS Budgets.',
    readTime: '5 min',
    category: 'AWS Cloud Tutorial',
    content: {
      overview: 'AWS offers a pay-as-you-go approach for pricing on the vast majority of cloud services. With AWS you pay only for the individual services you need, for as long as you use them, and without requiring long-term contracts or complex licensing.',
      sections: [
        {
          heading: 'AWS Free Tier Types',
          body: 'Three types of offers: 12-Months Free (e.g., 750 hours EC2 t2/t3.micro, 5GB S3), Always Free (e.g., 1 Million Lambda requests/month, 25GB DynamoDB), and Short-term Trials.',
          code: `# Best Practices for Cost Management:
# 1. Set up AWS Budgets with email alerts at 50%, 80%, and 100% of budgeted threshold.
# 2. Enable Cost Allocation Tags on all resources.
# 3. Use AWS Cost Explorer to forecast monthly expenses.
# 4. Terminate unused EC2 instances and release unattached Elastic IPs.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    AWS Budget Status: Active<br>
    Monthly Forecast: $48.20 / $100.00 Budget<br>
    <span style="color:#4ade80;">Alert Status: Normal (Within budgeted limits)</span>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
