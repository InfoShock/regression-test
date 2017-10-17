Setup document:

Introduction:

This document will give clear idea regarding the installation of npm packages that are required for regression test implemented for angular Js application. All the installation part will be done in pom.xml and Jenkinsfile will have the execution part of protractor. 

Explanation for POM.XML:

<plugin>
<groupId>org.codehaus.mojo</groupId>
<artifactId>exec-maven-plugin</artifactId>
	<version>1.2.1</version>
	<executions>
	<execution>									
		<id>Install Protractor</id>
		<phase>pre-integration-test</phase>
		<goals>
			<goal>exec</goal>
		</goals>
	<configuration>												<workingDirectory>nodejs/node</workingDirectory>
		<executable>${project.basedir}/nodejs/node/node</executable>
		<arguments>
			<argument>npm/bin/npm-cli.js</argument>
			<argument>install</argument>
			<argument>protractor</argument>								</arguments>
	</configuration>
	</execution>
		<execution>
			<id>Install Jasmine Reporters</id>
			<phase>pre-integration-test</phase>
			<goals>
				<goal>exec</goal>
			</goals>
		<configuration>
			<workingDirectory>nodejs/node</workingDirectory>
			<executable>${project.basedir}/nodejs/node/node</executable>
		<arguments>
			<argument>npm/bin/npm-cli.js</argument>
			<argument>install</argument>
			<argument>protractor-jasmine2-html-reporter</argument>
			</arguments>
		</configuration>
		</execution>                   									
	</executions>
</plugin>

	The above specified plugin is added in the pom.xml file for installing the npm packages like Protractor and Jasmine reports. 

	Specify the node js installation path in the <executable> tag for installing the additional packages for test execution. This is the place where the protractor and Jasmine report package will get installed.

Explanation for Jenkinsfile:
1.	stage 'Regression Test'
2.	export PATH=$PATH:/path of executable protractor
3.	sh 'protractor ${env.WORKSPACE}/conf.JS'


	The above script is added to Jenkinsfile. This script is for executing the Regression test using protractor package.

	1 point indicates the new stage is created with the name “Regression Test”

	2 point indicates the path environment variable is updated with the protractor installation path.

	3 point indicates protractor will execute the test based on the configuration file conf.js
