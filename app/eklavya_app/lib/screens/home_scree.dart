import 'package:eklavya_app/screens/chatbot_screen.dart';
import 'package:eklavya_app/screens/loan_screen.dart';
import 'package:eklavya_app/screens/scholarship_screen.dart';
import 'package:flutter/material.dart';
import 'package:eklavya_app/widgets/appBar.dart';
import 'package:eklavya_app/screens/chat_screen.dart';
import 'package:eklavya_app/screens/courses_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar(),
      body: SingleChildScrollView(
        padding: const EdgeInsets.only(bottom: 10),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  InkWell(
                    onTap: () {
                      // Navigator.of(context).push(MaterialPageRoute(
                      //   builder: (context) => CardSwipeScreen(),
                      // ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Colors.black,
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          width: 165,
                          height: 180,
                          color: Colors.white,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "OPPURTUNITES",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.tips_and_updates_rounded,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      // Navigator.of(context).push(MaterialPageRoute(
                      //   builder: (context) => AssignmentScreen(),
                      // ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Colors.black,
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          width: 165,
                          height: 180,
                          color: Colors.white,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "ASSIGNMENT",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.assignment_add,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 30,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  InkWell(
                    onTap: () {
                      // Navigator.of(context).push(MaterialPageRoute(
                      //   builder: (context) => QuizesListScreen(),
                      // ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Colors.black,
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          color: Colors.white,
                          width: 165,
                          height: 180,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "QUIZES",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.question_answer,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => CoursesScreen(),
                      ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Colors.black,
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          width: 165,
                          height: 180,
                          color: Colors.white,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "COURSES",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.video_call,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 30,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  InkWell(
                    onTap: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const ScholarshipsScreen(),
                      ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Colors.black,
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          color: Colors.white,
                          width: 175,
                          height: 180,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "SCHOLARSHIPS",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.question_answer,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const LoanScreen(),
                      ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Colors.black,
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          width: 165,
                          height: 180,
                          color: Colors.white,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "LOANS",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.video_call,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 30,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  InkWell(
                    onTap: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => ChatScreen(),
                      ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Colors.black,
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          color: Colors.white,
                          width: 165,
                          height: 180,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "MENTOR",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.question_answer,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => ChatbotScreen(),
                      ));
                    },
                    child: Card(
                      elevation: 6,
                      shadowColor: Color(0xFF000000),
                      child: ClipRRect(
                        borderRadius:
                            BorderRadius.circular(20), // Circular border
                        child: Container(
                          width: 175,
                          height: 180,
                          color: Colors.white,
                          child: const Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "CHATBOT",
                                style: TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Icon(
                                Icons.video_call,
                                size: 30,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
      // floatingActionButton: voiceNavigationButton(context),
    );
  }
}
