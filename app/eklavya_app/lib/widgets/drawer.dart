import 'package:flutter/material.dart';

drawer(BuildContext context) {
  return Drawer(
    child: ListView(
      // Important: Remove any padding from the ListView.
      padding: EdgeInsets.zero,
      children: [
        const DrawerHeader(
          decoration: BoxDecoration(
            color: Colors.blue,
          ),
          child: Text('Drawer Header'),
        ),
        ListTile(
          title: const Text('Home'),
          onTap: () {
            // Update the state of the app
            // Then close the drawer
            Navigator.pop(context);
          },
        ),
        ListTile(
          title: const Text('Business'),
          onTap: () {
            // Update the state of the app
            // Then close the drawer
            Navigator.pop(context);
          },
        ),
        ListTile(
          title: const Text('School'),
          onTap: () {
            // Update the state of the app
            // Then close the drawer
            Navigator.pop(context);
          },
        ),
      ],
    ),
  );
}
