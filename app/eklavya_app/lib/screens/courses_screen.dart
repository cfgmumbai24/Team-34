import 'package:flutter/material.dart';
import 'package:eklavya_app/widgets/appBar.dart';
import 'package:eklavya_app/widgets/drawer.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';

const List<String> list = <String>['Maths', 'Science', 'History', 'Geography'];

class CoursesScreen extends StatefulWidget {
  const CoursesScreen({super.key});
  @override
  State<CoursesScreen> createState() => _CoursesScreenState();
}

class _CoursesScreenState extends State<CoursesScreen> {
  late YoutubePlayerController _controller;
  List videosDataFromServer = [];
  String dropdownValue = list.first;

  @override
  void initState() {
    super.initState();
    fetchVideosForSubject(dropdownValue);
  }

  void fetchVideosForSubject(String subject) {
    // Replace with actual data fetching logic
    Map<String, List<Map<String, String>>> allVideos = {
      'Maths': [
        {
          'url': 'https://www.youtube.com/watch?v=1',
          'name': 'Math Video 1',
          'description': 'Description for Math Video 1'
        },
        // Add 9 more videos
      ],
      'Science': [
        {
          'url':
              'https://www.youtube.com/watch?v=p9Tk0pHGQ3c&list=PLS7IuLRcfmQvUyTyh9bOLnlZ7QmzX9MZG',
          'name': 'Science Video 1',
          'description': 'Description for Science Video 1'
        },
        // Add 9 more videos
      ],
      'History': [
        {
          'url': 'https://www.youtube.com/watch?v=3',
          'name': 'History Video 1',
          'description': 'Description for History Video 1'
        },
        // Add 9 more videos
      ],
      'Geography': [
        {
          'url': 'https://www.youtube.com/watch?v=4',
          'name': 'Geography Video 1',
          'description': 'Description for Geography Video 1'
        },
        // Add 9 more videos
      ],
    };

    setState(() {
      videosDataFromServer = allVideos[subject] ?? [];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[50],
      endDrawer: drawer(context),
      appBar: appBar(),
      body: Padding(
        padding: const EdgeInsets.all(32.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            DropdownButton<String>(
              value: dropdownValue,
              icon: const Icon(Icons.arrow_downward),
              elevation: 16,
              style: const TextStyle(color: Colors.deepPurple),
              underline: Container(
                height: 2,
                color: Colors.deepPurpleAccent,
              ),
              onChanged: (String? value) {
                if (value != null) {
                  setState(() {
                    dropdownValue = value;
                    fetchVideosForSubject(dropdownValue);
                  });
                }
              },
              items: list.map<DropdownMenuItem<String>>((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value),
                );
              }).toList(),
            ),
            const SizedBox(height: 20),
            videosDataFromServer.isNotEmpty
                ? Expanded(
                    child: ListView.builder(
                    itemBuilder: (context, index) {
                      var videoLink = videosDataFromServer[index]['url'];
                      String? videoId = YoutubePlayer.convertUrlToId(videoLink);
                      if (videoId != null) {
                        final controller = YoutubePlayerController(
                          initialVideoId: videoId,
                          flags: YoutubePlayerFlags(
                            mute: false,
                            autoPlay: false,
                            disableDragSeek: false,
                            loop: false,
                            isLive: false,
                            forceHD: false,
                            enableCaption: true,
                          ),
                        );
                        return Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: InkWell(
                            child: Row(
                              children: [
                                SizedBox(
                                  height: 120,
                                  width: 150,
                                  child: YoutubePlayer(
                                    controller: controller,
                                    liveUIColor: Colors.amber,
                                  ),
                                ),
                                SizedBox(width: 10),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        videosDataFromServer[index]['name']!,
                                        overflow: TextOverflow.ellipsis,
                                        maxLines: 2,
                                        style: TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.bold),
                                      ),
                                      Text(
                                        videosDataFromServer[index]
                                            ['description']!,
                                        overflow: TextOverflow.ellipsis,
                                        maxLines: 2,
                                        style: TextStyle(fontSize: 16),
                                      )
                                    ],
                                  ),
                                )
                              ],
                            ),
                            onTap: () async {
                              await launchUrl(Uri.parse(videoLink));
                            },
                          ),
                        );
                      } else {
                        return InkWell(
                          child: Row(
                            children: [
                              SizedBox(
                                height: 120,
                                width: 150,
                                child: Text("Invalid URL"),
                              ),
                              SizedBox(width: 10),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      videosDataFromServer[index]['name']!,
                                      overflow: TextOverflow.ellipsis,
                                      maxLines: 2,
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    Text(
                                      videosDataFromServer[index]
                                          ['description']!,
                                      overflow: TextOverflow.ellipsis,
                                      maxLines: 2,
                                      style: TextStyle(fontSize: 16),
                                    )
                                  ],
                                ),
                              )
                            ],
                          ),
                          onTap: () async {
                            await launchUrl(Uri.parse(videoLink));
                          },
                        );
                      }
                    },
                    itemCount: videosDataFromServer.length,
                  ))
                : SizedBox.shrink()
          ],
        ),
      ),
    );
  }
}
