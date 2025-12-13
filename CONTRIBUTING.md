# Contributing to Virtual Restaurant Management System

Thank you for your interest in contributing to the Virtual Restaurant Management System! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- Git

### Development Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/virtual-restaurant-management.git
   cd virtual-restaurant-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up Firebase project (see README.md)
5. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Code Style & Standards

### TypeScript
- Use strict TypeScript settings
- Define proper interfaces for all data structures
- Avoid `any` types when possible
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Follow the existing component structure
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Write accessible components

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use the existing design system (shadcn/ui components)

### File Organization
```
src/
├── components/
│   ├── manager/        # Manager-specific components
│   ├── waiter/         # Waiter-specific components
│   ├── kitchen/        # Kitchen staff components
│   ├── cashier/        # Cashier components
│   ├── butcher/        # Butcher components
│   ├── bar/            # Bar staff components
│   └── ui/             # Reusable UI components
├── firebase.ts         # Firebase configuration
├── App.tsx             # Main application
└── main.tsx            # Entry point
```

## 🧪 Testing

### Manual Testing
- Test all user roles (Manager, Waiter, Cashier, Kitchen, Butcher, Bar)
- Verify Firebase integration works correctly
- Test responsive design on different screen sizes
- Verify real-time updates and notifications

### Test Cases to Consider
- User authentication and role-based access
- Order creation and status updates
- Inventory management and stock tracking
- Payment processing workflows
- Real-time synchronization
- Error handling and edge cases

## 🔧 Firebase Guidelines

### Security Rules
- Follow the principle of least privilege
- Test rules thoroughly before deployment
- Document any changes to security rules

### Data Structure
- Maintain consistency with existing collections
- Use proper indexing for query performance
- Document collection schemas in comments

### Real-time Updates
- Use Firestore onSnapshot for live data
- Implement proper cleanup in useEffect
- Handle loading and error states

## 📋 Pull Request Process

### Before Submitting
1. **Code Quality**
   - Run `npm run lint` and fix any issues
   - Ensure TypeScript compilation passes
   - Test your changes thoroughly

2. **Documentation**
   - Update README.md if you change features
   - Add comments for complex logic
   - Update type definitions if needed

3. **Commits**
   - Use clear, descriptive commit messages
   - Follow conventional commit format:
     ```
     feat: add new order status tracking
     fix: resolve payment confirmation bug
     docs: update installation instructions
     ```

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested with all user roles
- [ ] Verified Firebase integration
- [ ] Tested responsive design
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
```

### Review Process
1. All PRs require at least one review
2. Address feedback promptly
3. Ensure CI/CD checks pass
4. Maintain backward compatibility

## 🐛 Reporting Bugs

### Bug Report Template
```markdown
**Describe the bug**
Clear description of the issue

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- Browser: [e.g. Chrome 91]
- OS: [e.g. iOS]
- Firebase project: [e.g. production]

**Additional context**
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
Description of the problem

**Describe the solution you'd like**
Clear description of the desired solution

**Describe alternatives you've considered**
Other solutions you've considered

**Additional context**
Any other relevant information or mockups
```

## 🏷️ Release Process

### Version Numbering
We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

### Release Checklist
- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Test all user roles
- [ ] Verify Firebase rules
- [ ] Update documentation
- [ ] Create release tag

## 📞 Getting Help

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check README.md and inline comments

## 🎯 Areas for Contribution

### High Priority
- **Mobile Optimization**: Improve responsive design
- **Performance**: Optimize Firebase queries
- **Testing**: Add automated tests
- **Documentation**: Improve setup guides

### Medium Priority
- **New Features**: Advanced analytics, reporting
- **Integrations**: Payment gateways, POS systems
- **UI/UX**: Design improvements and accessibility
- **Analytics**: User behavior tracking

### Nice to Have
- **Multi-language**: Internationalization support
- **Themes**: Dark mode and custom themes
- **Advanced Features**: AI-powered insights
- **Mobile App**: React Native version

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to making restaurant management more efficient!