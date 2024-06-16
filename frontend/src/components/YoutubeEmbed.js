import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({embedId, desc}) => (
<div class="row gy-4">
                        <div class="col-9 col-lg-7  text-center">
                            <iframe width="474.5" height="315" src={embedId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                            {/* <iframe width="474.5" height="315" src="https://www.youtube.com/embed/mlxoB3wI9eY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe> */}

                        </div>
                        <div class="col-9 col-lg-5 pt-2 my-auto">
                            <p>{desc}</p>
                        </div>
                    </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;