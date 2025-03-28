Module.register("MMM-FamilyContacts", {
    // Default module config
    defaults: {
      updateInterval: 86400000, // Update once per day (mostly for refreshing the display)
      fadeSpeed: 2000,
      title: "Family Contacts",
      contacts: [
        {
          name: "John",
          phone: "111-222-3333",
          avatar: "john.png"
        },
        {
          name: "Mary",
          phone: "222-333-4444",
          avatar: "mary.png"
        },
        {
          name: "David",
          phone: "333-444-5555",
          avatar: "david.png"
        }
      ],
      showTitle: true,
      titleSize: "28px",
      nameSize: "32px",    // Large name size
      phoneSize: "28px",   // Large phone number size
      avatarSize: 100,     // Avatar size in pixels
      titleColor: "#FFFFFF",
      nameColor: "#FFFFFF",
      phoneColor: "#FFFFFF",
      avatarBorderColor: "#FFFFFF",
      avatarBorderWidth: 2,
      avatarDefaultIcon: "default.png"
    },
  
    // Define required styles
    getStyles: function() {
      return ["familycontacts.css"];
    },
  
    // Define start sequence
    start: function() {
      Log.info("Starting module: " + this.name);
      this.loaded = false;
      const self = this;
      
      // Load default avatar if needed
      this.defaultAvatar = this.config.avatarDefaultIcon;
      
      // Schedule update timer
      setInterval(function() {
        self.updateDom(self.config.fadeSpeed);
      }, this.config.updateInterval);
      
      this.loaded = true;
      this.updateDom(this.config.fadeSpeed);
    },
  
    // Override dom generator
    getDom: function() {
      const wrapper = document.createElement("div");
      wrapper.className = "family-contacts-wrapper";
  
      if (this.config.showTitle) {
        const titleDiv = document.createElement("div");
        titleDiv.className = "family-contacts-title";
        titleDiv.style.fontSize = this.config.titleSize;
        titleDiv.style.color = this.config.titleColor;
        titleDiv.innerHTML = this.config.title;
        wrapper.appendChild(titleDiv);
      }
  
      const contactsDiv = document.createElement("div");
      contactsDiv.className = "family-contacts-list";
  
      this.config.contacts.forEach(contact => {
        const contactDiv = document.createElement("div");
        contactDiv.className = "family-contact-item";
  
        // Avatar
        const avatarDiv = document.createElement("div");
        avatarDiv.className = "family-contact-avatar";
        
        const avatar = document.createElement("img");
        avatar.src = "modules/MMM-FamilyContacts/avatars/" + (contact.avatar || this.defaultAvatar);
        avatar.width = this.config.avatarSize;
        avatar.height = this.config.avatarSize;
        avatar.style.borderColor = this.config.avatarBorderColor;
        avatar.style.borderWidth = this.config.avatarBorderWidth + "px";
        avatarDiv.appendChild(avatar);
        
        // Info container
        const infoDiv = document.createElement("div");
        infoDiv.className = "family-contact-info";
        
        // Name
        const nameDiv = document.createElement("div");
        nameDiv.className = "family-contact-name";
        nameDiv.innerHTML = contact.name;
        nameDiv.style.fontSize = this.config.nameSize;
        nameDiv.style.color = this.config.nameColor;
        
        // Phone
        const phoneDiv = document.createElement("div");
        phoneDiv.className = "family-contact-phone";
        phoneDiv.innerHTML = contact.phone;
        phoneDiv.style.fontSize = this.config.phoneSize;
        phoneDiv.style.color = this.config.phoneColor;
        
        // Assemble
        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(phoneDiv);
        
        contactDiv.appendChild(avatarDiv);
        contactDiv.appendChild(infoDiv);
        
        contactsDiv.appendChild(contactDiv);
      });
  
      wrapper.appendChild(contactsDiv);
      return wrapper;
    }
  });