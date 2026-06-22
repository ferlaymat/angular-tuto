# angular-tuto

This app is a sample which show how to use different feature with angular 22. It is composed with 2 subprojects.
angular-app: front-end layer in angular
angular-back: back-end developped in Java springboot

## Requirements

- Angular 22.0.0 (packages core, common, compiler, forms, material, platform-browser, router)                         
- Angular Material 22.0.0 + CDK                                                                                       
- RxJS 7.8.0
- TypeScript 6.0.3
- Spring Boot 4.0.5
- Java 21

## Getting Started

```bash
cd ./angular-back
mvn spring-boot:run
cd ../angular-app
ng s -o
```

## Projects and URLs

| Service | URL                   | Use case                                            |
| ------- | --------------------- | --------------------------------------------------- |
| front   | http://localhost:4200 | Simple front project which display angular features |

