<div align="center">

# 💜 MediNova

### **Modern Healthcare Information & Doctor Discovery Platform**

A server-rendered healthcare web application deployed on AWS using a **serverless architecture with Amazon S3, AWS Lambda, and Amazon CloudFront.**

<br/>

[![Deployment](https://img.shields.io/badge/Deployment-AWS_Serverless-7C3AED?style=for-the-badge)](https://aws.amazon.com/)
[![SSR](https://img.shields.io/badge/Rendering-Server--Side-8B5CF6?style=for-the-badge)](https://tanstack.com/start)
[![React](https://img.shields.io/badge/Frontend-React-9333EA?style=for-the-badge\&logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-7E22CE?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)

<br/>

**Healthcare • Serverless • SSR • AWS • Cloud Delivery**

<br/>



</div>

---

## 💜 About MediNova

**MediNova** is a modern healthcare web application created to make healthcare information and doctor discovery simple, accessible, and intuitive.

The application provides users with a clean interface for exploring healthcare information, services, doctors, and individual doctor profiles.

What makes this project different from a traditional static website is its **server-side rendering architecture**.

MediNova is deployed on AWS using:

```text
React + TanStack Start + Nitro
              ↓
          AWS Lambda
              ↓
       Amazon CloudFront
          ↙          ↘
      Amazon S3     Lambda
   Static Assets      SSR
```

This project was built to demonstrate practical experience in **modern web development, server-side rendering, and AWS serverless cloud architecture**.

---

# ✦ Why This Project?

Many frontend applications are deployed simply as static files.

MediNova takes a different approach.

The application separates:

**Static content**

from

**Server-side application execution**

This allows AWS services to handle different responsibilities efficiently.

```text
                    MediNova
                       │
              ┌────────┴────────┐
              │                 │
        Static Content      Dynamic Pages
              │                 │
              ▼                 ▼
         Amazon S3          AWS Lambda
              │                 │
              └────────┬────────┘
                       ▼
                 CloudFront
                       │
                       ▼
                    Users
```


# ✦ Core Features

<table>
<tr>
<td width="50%">

### 🩺 Healthcare Information

Provides organized healthcare-related information through a clean and accessible interface.

</td>
<td width="50%">

### 👨‍⚕️ Doctor Discovery

Users can explore available doctors and access individual doctor profiles.

</td>
</tr>

<tr>
<td width="50%">

### ⚡ Server-Side Rendering

Dynamic application pages are rendered through TanStack Start and Nitro on AWS Lambda.

</td>
<td width="50%">

### 📱 Responsive Design

The interface is designed to provide a consistent experience across desktop, tablet, and mobile devices.

</td>
</tr>

<tr>
<td width="50%">

### 🔗 Dynamic Routing

Doctor profiles use dynamic routes such as:

```text
/doctors/:doctorId
```

</td>
<td width="50%">

### ☁️ Serverless Deployment

The application runs using managed AWS services without requiring a traditional always-running server.

</td>
</tr>
</table>

---

# ✦ Cloud Architecture

The MediNova deployment uses **Amazon CloudFront as the public entry point** with two separate origins.

```text
                         ┌─────────────────┐
                         │      USER       │
                         │     Browser     │
                         └────────┬────────┘
                                  │
                                  │ HTTPS
                                  ▼
                    ╔══════════════════════════╗
                    ║     AMAZON CLOUDFRONT    ║
                    ║                          ║
                    ║   CDN • HTTPS • Routing  ║
                    ╚════════════╤═════════════╝
                                 │
                    ┌────────────┴────────────┐
                    │                         │
             /assets/*                 Other Requests
                    │                         │
                    ▼                         ▼
          ┌─────────────────┐       ┌─────────────────┐
          │   AMAZON S3     │       │   AWS LAMBDA    │
          │                 │       │                 │
          │ Static Assets   │       │ SSR Application │
          │ Images          │       │ Nitro           │
          │ CSS             │       │ TanStack Start  │
          │ JavaScript      │       │ React SSR       │
          └─────────────────┘       └────────┬────────┘
                                             │
                                             ▼
                                      Server Rendered
                                           HTML
```


# ✦ CloudFront Routing

CloudFront separates static resources from application requests.

```text
                         CloudFront
                             │
              ┌──────────────┴──────────────┐
              │                             │
         /assets/*                    Everything Else
              │                             │
              ▼                             ▼
        ┌───────────┐                 ┌───────────┐
        │    S3     │                 │  Lambda   │
        │           │                 │           │
        │  Assets   │                 │    SSR    │
        └───────────┘                 └───────────┘
```


# ✦ Deployment Pipeline

The application source code is transformed into separate server and static outputs during the AWS production build.

```text
┌──────────────────────┐
│    MediNova Source   │
│        Code          │
└──────────┬───────────┘
           │
           ▼
    Vite + Nitro Build
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
 Server Output  Public Output
     │           │
     ▼           ▼
  function.zip   S3
     │           │
     ▼           │
  AWS Lambda     │
     │           │
     └─────┬─────┘
           ▼
      CloudFront
           │
           ▼
        Internet
```


# ✦ 



<img width="1722" height="702" alt="cl1" src="https://github.com/user-attachments/assets/c460db09-6f8a-43c8-b86f-ddb09411f162" />


---


<div align="center">

### 💜 Built with modern web technologies & AWS

**MediNova**

*Healthcare Information · Serverless Architecture · Server-Side Rendering*

<br/>

**Built by Gaya**
*Faculty of Computing*

<br/>

<sub>© 2026 MediNova</sub>

</div>
