# Portfolio Website Management Documentation

## Overview
This documentation provides instructions on how to manage and update your portfolio website, specifically for adding new AI projects, data projects, or modifying existing content.

## Project Structure
The portfolio is built as a React single-page application with all components defined in `/app/frontend/src/App.js`. The monolithic approach keeps all code in one place for easy maintenance.

## Adding New AI Projects

### Step 1: Locate the AI Projects Array
In `/app/frontend/src/App.js`, find the `aiProjects` array (around line 48):

```javascript
const aiProjects = [
  {
    title: "Your Project Title",
    description: "Detailed description of your project...",
    tech: ["Technology1", "Technology2", "Technology3"],
    link: "#", // Replace with actual project URL
    featured: true,
    icon: <Brain className="w-8 h-8" /> // Choose appropriate icon
  },
  // Add new projects here...
];
```

### Step 2: Add Your New AI Project
Add a new object to the array with the following structure:

```javascript
{
  title: "Your New AI Project Title",
  description: "A comprehensive description of what your AI project does, its purpose, and key features.",
  tech: ["Python", "TensorFlow", "Flask", "API"], // List of technologies used
  link: "https://github.com/yourusername/project-repo", // Actual project URL
  featured: true, // Set to true for featured projects
  icon: <Brain className="w-8 h-8" /> // Choose from available icons
}
```

### Available Icons for AI Projects:
- `<Brain className="w-8 h-8" />` - For general AI/ML projects
- `<Users className="w-8 h-8" />` - For customer service/interaction projects
- `<Shield className="w-8 h-8" />` - For security/compliance projects
- `<Activity className="w-8 h-8" />` - For monitoring/analysis projects
- `<Code className="w-8 h-8" />` - For development-focused projects

## Adding New Data Projects

### Step 1: Locate the Data Projects Array
Find the `dataProjects` array in `/app/frontend/src/App.js` (around line 67):

```javascript
const dataProjects = [
  {
    title: "Project Title",
    description: "Project description...",
    link: "https://github.com/link-to-project",
    icon: <BarChart3 className="w-6 h-6" />
  },
  // Add new projects here...
];
```

### Step 2: Add Your New Data Project
Add a new object with this structure:

```javascript
{
  title: "Your Data Project Title",
  description: "Clear description of the data analysis, methodology, and insights gained.",
  link: "https://github.com/OmarAbuLayla/your-project-repo",
  icon: <BarChart3 className="w-6 h-6" /> // Choose appropriate icon
}
```

### Available Icons for Data Projects:
- `<BarChart3 className="w-6 h-6" />` - For general data analysis
- `<TrendingUp className="w-6 h-6" />` - For trend analysis
- `<Heart className="w-6 h-6" />` - For healthcare-related projects
- `<Activity className="w-6 h-6" />` - For monitoring/tracking projects
- `<Car className="w-6 h-6" />` - For automotive/transportation projects
- `<ShoppingCart className="w-6 h-6" />` - For retail/sales analysis
- `<Home className="w-6 h-6" />` - For real estate/housing projects
- `<Grape className="w-6 h-6" />` - For agriculture/food projects
- `<TreePine className="w-6 h-6" />` - For environmental projects

## Updating Existing Project Links

### For AI Projects:
1. Find the project in the `aiProjects` array
2. Update the `link` property with the new URL
3. Save the file

### For Data Projects:
1. Find the project in the `dataProjects` array
2. Update the `link` property with the new GitHub URL
3. Save the file

## Adding New Skills

### Step 1: Locate the Skills Array
Find the `skills` array in `/app/frontend/src/App.js` (around line 147):

```javascript
const skills = [
  {
    category: "Category Name",
    items: [
      { name: "Skill Name", level: 90, icon: "🔧" },
      // Add new skills here...
    ]
  }
];
```

### Step 2: Add New Skills
To add a new skill to an existing category:

```javascript
{ name: "New Skill", level: 85, icon: "🚀" }
```

To add a new category:

```javascript
{
  category: "New Category",
  items: [
    { name: "Skill 1", level: 90, icon: "📱" },
    { name: "Skill 2", level: 85, icon: "🔧" }
  ]
}
```

## Customizing Personal Information

### Update Personal Details:
In the Hero Section (around line 286), update:
- Name: Change the `<h1>` content
- Title: Change the subtitle text
- Description: Update the passion statement
- Profile Image: Replace the `src` URL in the profile image

### Update Contact Information:
In the Contact Section (around line 650), update:
- Email: Change the `mailto:` link
- LinkedIn: Update the LinkedIn profile URL
- GitHub: Update the GitHub profile URL

## Deployment Notes

### After Making Changes:
1. Save all files
2. The React development server will automatically reload
3. For production deployment, run: `yarn build`

### Testing Your Changes:
1. Check the website locally at the development URL
2. Verify all links work correctly
3. Ensure new projects display properly
4. Test responsive design on mobile devices

## Best Practices

### Project Descriptions:
- Keep descriptions concise but informative (2-3 sentences)
- Highlight key technologies and methodologies used
- Mention the impact or insights gained from the project

### Technology Tags:
- Use consistent naming (e.g., "Python" not "python")
- Limit to 5-7 technologies per project
- Include both programming languages and frameworks/tools

### Links:
- Always use HTTPS URLs
- Verify links work before adding them
- For private repositories, consider creating public demos

### Icons:
- Choose icons that represent the project's domain
- Maintain consistency within categories
- Test icon visibility on different screen sizes

## Troubleshooting

### Common Issues:
1. **Syntax Errors**: Check for missing commas, brackets, or quotes
2. **Icons Not Displaying**: Ensure the icon import is included at the top of the file
3. **Links Not Working**: Verify URLs are complete and accessible
4. **Styling Issues**: Check that Tailwind classes are applied correctly

### Getting Help:
- Check the browser console for error messages
- Verify the React development server is running
- Ensure all dependencies are installed with `yarn install`

## File Locations

### Main Files:
- **Main Component**: `/app/frontend/src/App.js`
- **Styles**: `/app/frontend/src/App.css`
- **Dependencies**: `/app/frontend/package.json`

### Key Sections in App.js:
- **AI Projects**: Line ~48
- **Data Projects**: Line ~67
- **Skills**: Line ~147
- **Personal Info**: Line ~286
- **Contact Info**: Line ~650

---

*This documentation was created to help you easily maintain and update your portfolio website. For any technical issues, refer to the React and Tailwind CSS documentation.*