# MMM-FamilyContacts

A MagicMirror² module designed to display family contact information in a clear, accessible format. This module is ideal for users with visual impairments or cognitive conditions like dementia, featuring large text and high contrast.

## Screenshot

![Example Screenshot](screenshot.png)

## Installation

1. Navigate to your MagicMirror's modules folder:
```bash
cd ~/MagicMirror/modules/
```

2. Clone this repository:
```bash
git clone https://github.com/axdaws007/MMM-FamilyContacts.git
```

3. Add the module to your `config.js` file:
```javascript
{
  module: "MMM-FamilyContacts",
  position: "top_right",
  config: {
    // See configuration options below
  }
}
```

4. Create an `avatars` folder inside the module directory:
```bash
mkdir ~/MagicMirror/modules/MMM-FamilyContacts/avatars
```

5. Add your avatar images to this folder.

## Configuration Options

| Option | Description | Default |
| ------ | ----------- | ------- |
| `title` | Header text for the module | "Family Contacts" |
| `showTitle` | Whether to show the header | true |
| `contacts` | Array of contact objects (see below) | Sample contacts |
| `updateInterval` | How often to refresh the display (ms) | 86400000 (1 day) |
| `fadeSpeed` | Animation speed for updates (ms) | 2000 |
| `titleSize` | Font size for the header | "28px" |
| `nameSize` | Font size for contact names | "32px" |
| `phoneSize` | Font size for phone numbers | "28px" |
| `avatarSize` | Size of avatar images in pixels | 100 |
| `titleColor` | Text color for the header | "#FFFFFF" |
| `nameColor` | Text color for contact names | "#FFFFFF" |
| `phoneColor` | Text color for phone numbers | "#FFFFFF" |
| `avatarBorderColor` | Border color for avatars | "#FFFFFF" |
| `avatarBorderWidth` | Border width for avatars in pixels | 2 |
| `avatarDefaultIcon` | Default avatar if none provided | default.png |

### Contact Object

Each contact in the `contacts` array should have the following structure:

```javascript
{
  name: "John",            // Contact's name
  phone: "555-123-4567",   // Contact's phone number
  avatar: "john.png"       // Avatar image file name
}
```

## Example Configuration

```javascript
{
  module: "MMM-FamilyContacts",
  position: "top_right",
  config: {
    title: "Important Phone Numbers",
    titleSize: "32px",
    nameSize: "36px",
    phoneSize: "30px",
    avatarSize: 120,
    contacts: [
      {
        name: "Susan",
        phone: "555-123-4567",
        avatar: "susan.jpg"
      },
      {
        name: "Michael",
        phone: "555-987-6543",
        avatar: "michael.jpg"
      },
      {
        name: "Emma",
        phone: "555-567-8901",
        avatar: "emma.jpg"
      }
    ]
  }
}
```

## Accessibility Features

This module includes several features to make it more accessible:
- Large, configurable font sizes
- High contrast text
- Clear visual separation between contacts
- Easy-to-recognize avatar photos
- Simple, uncluttered layout

## Creating Avatar Images

For best results:
1. Use clear, recognizable photos of each person's face
2. Crop photos to square dimensions (e.g., 200x200 pixels)
3. Ensure good lighting and contrast in the photos
4. Consider adding a default avatar image for any contacts without photos

## License

MIT License
