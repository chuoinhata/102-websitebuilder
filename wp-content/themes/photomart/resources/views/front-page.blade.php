@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.page-header')
    {!! facetwp_display( 'facet', 'posts_search' ) !!}
    <ul class="facetwp-template">
    @foreach( $themes as $theme )
        <li>{{ $theme->post_title }}</li>
    @endforeach
    </ul>
    {{ $title }}
  @endwhile
@endsection
