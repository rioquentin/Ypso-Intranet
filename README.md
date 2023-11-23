# Ypso - Intranet
This repository is the intranet for the YPSO junior enterprise, founded by Holberton School France Students.

## Ypso members - Guidelines
1. Adding a new page

When adding a new page, let's say a Dashboard, I advise for creating a new folder in pages/ structured like this:

___
*/Dashboard*

*  */components*
	+ */DashboardComponent1*
		+ *DashboardComponent1.js*
		+ *DashboardComponent1.scss*
	+ */DashboardComponent2*
		+ *DashboardComponent2.js*
		+ *DashboardComponent2.scss*
*  *Dashboard.js*

___

2. Module types

- Pages -> Module that corresponds to a route
- Layouts -> Refers to the global layout of the website
- Components -> Individual page component (stylized button, card, ....)
- Utils -> Services/Methods reused often (ex: API call to YPSO database)

___

3. Styling

For colors, try to use a globalized style, but don't hesitate to add new colors to the current theme.

To use the default theme, import the file styles/variables.scss in your scss file and use the corresponding variable like this:
```
@import "../../../../styles/variables.scss";

.example {
	background-color: $variable;
}
```

___

4. Contributing to the project

This part is just a guide for merging a module to the main branch for those not yet familiar with Git.

First of all for a new module we ask for you to create a **new branch** specific to the part you're gonna implement.

After you've finished updating your current module and you want to add it to the project, follow these steps:

 When you've pushed your last commit, first of all **pull** the last version of the branch you desire to merge into.  
Example: If I want to merge my branch into main, the command is ```git pull origin main```  
There is probably a need to resolve __merge conflicts__ when doing that. It's a pretty straightforward method that consists in comparing both versions of a file to then decide what the output in the final version should be.  
  
Finally, if there are no conflicts to solve left, you can go the the github page and click on **pull requests**. Then click on **New pull request**.  
Select the branch you want to merge to as **base** and your module's branch as **compare**, then click on **Create pull request**

Once all of this is done, ask to one of the administrators of the project to check and validate your pull request. Once he's validated it, you're done!
